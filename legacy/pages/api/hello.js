// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const orders = [
    {
      order_id: "123123",
      email: "raff@gmail.com",
      status: {
        status: "PENDING",
        message: "Message will go here",
        timestamp: "2023-06-20T09:12:11.372Z",
      },
      shipping: [
        {
          courier: "That Courier",
          tracking_url: "rafael.com",
          tracking_code: "ABSH134",
        },
      ],
    },
  ];
  res.status(200).json({ name: "John Doe", orders });
}
