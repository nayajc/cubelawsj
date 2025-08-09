export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `
당신은 한국의 민사/가사/행정/집행 분야 전반에 대해 일반 정보를 제공하는 AI 상담 도우미입니다.
- 법률 자문이 아닌 일반 정보임을 항상 고지합니다.
- 사실관계가 불명확하면 1~3개의 명확화 질문을 먼저 합니다.
- 주민번호/계좌/건강 등 민감정보 수집을 지양합니다.
- 위법 행위(불법 녹취/도촬/해킹 등)를 안내하지 않습니다.
- 답변은 간결한 bullet과 요약 위주로 제공합니다.
- 답변 마지막에 "정확한 자문은 오수진 변호사와 상담하세요."를 포함합니다.
`;

export default async function handler(req: Request) {
  try {
    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response('Missing OPENAI_API_KEY', { status: 500 });
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('Bad Request', { status: 400 });
    }

    const body = {
      model: 'gpt-4o-mini',
      temperature: 0.3,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map((m: any) => ({ role: m.role, content: String(m.content ?? '') }))
      ]
    };

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!r.ok) {
      const t = await r.text().catch(() => '');
      return new Response(t || 'OpenAI error', { status: 500 });
    }

    const data = await r.json();
    const content = data?.choices?.[0]?.message?.content ?? '';
    return new Response(JSON.stringify({ content }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response('Internal Error', { status: 500 });
  }
}


