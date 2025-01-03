import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BatDongBo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Lập trình bất đồng bộ trong JavaScript</CardTitle>
          <CardDescription>Khái niệm về lập trình bất đồng bộ và cách sử dụng</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl">
            <p className="lead">
              Lập trình bất đồng bộ cho phép thực hiện các tác vụ mà không cần chờ đợi tác vụ trước đó hoàn thành, giúp tăng hiệu suất của ứng dụng.
            </p>
            
            <h2>Các phương pháp lập trình bất đồng bộ</h2>
            <ul>
              <li><strong>Callbacks</strong>: Hàm được truyền như một đối số và được gọi khi tác vụ hoàn thành</li>
              <li><strong>Promises</strong>: Đối tượng đại diện cho kết quả của một tác vụ bất đồng bộ</li>
              <li><strong>Async/Await</strong>: Cú pháp cho phép viết mã bất đồng bộ giống như mã đồng bộ</li>
            </ul>

            <h2>Ví dụ</h2>
            <pre><code>{`
// Sử dụng Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dữ liệu đã được tải");
    }, 2000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Sử dụng Async/Await
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
            `}</code></pre>

            <p>
              Trong ví dụ trên, chúng ta đã sử dụng Promises và Async/Await để xử lý các tác vụ bất đồng bộ.
            </p>

            <h2>Kết luận</h2>
            <p>
              Lập trình bất đồng bộ là một khía cạnh quan trọng của JavaScript, đặc biệt là trong phát triển web hiện đại. Hiểu và sử dụng thành thạo các kỹ thuật lập trình bất đồng bộ sẽ giúp bạn tạo ra các ứng dụng phản hồi nhanh và hiệu quả hơn.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}

