export const verifyRecaptcha = async (token) => {
  // const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/test-1723880624488/assessments?key=${process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          token: token,
          expectedAction: 'USER_ACTION',
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      }),
    }
  );
  const data = await response.json();
  return data?.riskAnalysis?.score;
};
