export const metadata = {
  title: "next.js 사이트 만들기",
  description: "next.js로 사이트 만드는 연습을 진행하는 공간입니다. 자료가 수시로 바뀔 수 있습니다.",
  keywords: ["넥스트", "next.js"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
