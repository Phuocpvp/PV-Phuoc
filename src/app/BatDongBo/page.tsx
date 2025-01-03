'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AsynchronousJavaScript() {
  const [fetchStatus, setFetchStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [fetchResult, setFetchResult] = React.useState<string>('')

  const simulateFetch = async () => {
    setFetchStatus('loading')
    setFetchResult('')
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      const success = Math.random() > 0.5
      if (success) {
        setFetchStatus('success')
        setFetchResult('Data fetched successfully!')
      } else {
        throw new Error('Random error occurred')
      }
    } catch (error) {
      setFetchStatus('error')
      setFetchResult('An error occurred while fetching data.')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="mb-4">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Asynchronous JavaScript"
              width={1200}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold">Asynchronous JavaScript</CardTitle>
          <CardDescription>Khám phá cách xử lý các tác vụ không đồng bộ trong JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Giới thiệu</h2>
              <p className="mb-4">Asynchronous JavaScript cho phép thực thi code không theo thứ tự tuần tự, giúp xử lý các tác vụ tốn thời gian mà không làm chặn luồng chính của chương trình. Điều này đặc biệt hữu ích khi làm việc với các hoạt động I/O, như gọi API hoặc đọc file.</p>
              <p>Hiểu và sử dụng hiệu quả các kỹ thuật bất đồng bộ là một kỹ năng quan trọng trong lập trình JavaScript hiện đại, đặc biệt là trong phát triển web.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Các Kỹ thuật Bất đồng bộ</h2>
              <Tabs defaultValue="callbacks">
                <TabsList>
                  <TabsTrigger value="callbacks">Callbacks</TabsTrigger>
                  <TabsTrigger value="promises">Promises</TabsTrigger>
                  <TabsTrigger value="async-await">Async/Await</TabsTrigger>
                </TabsList>
                <TabsContent value="callbacks">
                  <p className="mb-2">Callbacks là cách truyền thống nhất để xử lý bất đồng bộ trong JavaScript:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`function fetchData(callback) {
  setTimeout(() => {
    callback(null, 'Data fetched');
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(data);
  }
});`}</code>
                  </pre>
                  <p>Callbacks có thể dẫn đến &quot;callback hell&quot; khi xử lý nhiều tác vụ bất đồng bộ lồng nhau.</p>
                </TabsContent>
                <TabsContent value="promises">
                  <p className="mb-2">Promises cung cấp cách tiếp cận có cấu trúc hơn cho lập trình bất đồng bộ:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</code>
                  </pre>
                  <p>Promises cho phép xử lý lỗi tốt hơn và dễ dàng kết hợp nhiều tác vụ bất đồng bộ.</p>
                </TabsContent>
                <TabsContent value="async-await">
                  <p className="mb-2">Async/Await là cú pháp &quot;syntactic sugar&quot; trên Promises, giúp code bất đồng bộ trông giống như code đồng bộ:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`async function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Data fetched'), 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();`}</code>
                  </pre>
                  <p>Async/Await giúp code dễ đọc và dễ bảo trì hơn, đặc biệt với các tác vụ bất đồng bộ phức tạp.</p>
                </TabsContent>
              </Tabs>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ví dụ Tương tác: Mô phỏng Fetch API</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="mb-2">Trạng thái: {fetchStatus}</p>
                <p className="mb-4">{fetchResult}</p>
                <Button 
                  onClick={simulateFetch}
                  disabled={fetchStatus === 'loading'}
                >
                  {fetchStatus === 'loading' ? 'Đang tải...' : 'Fetch Data'}
                </Button>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Xử lý Bất đồng bộ Nâng cao</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="parallel">
                  <AccordionTrigger>Xử lý Song song</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Thực hiện nhiều tác vụ bất đồng bộ cùng một lúc:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`async function fetchAllData() {
  const [result1, result2, result3] = await Promise.all([
    fetch('url1'),
    fetch('url2'),
    fetch('url3')
  ]);
  // Xử lý kết quả
}`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="race">
                  <AccordionTrigger>Promise.race()</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Xử lý Promise nào hoàn thành (hoặc bị từ chối) đầu tiên:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`const promise1 = new Promise(resolve => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise(resolve => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2]).then(value => {
  console.log(value);  // "two"
});`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="async-generators">
                  <AccordionTrigger>Async Generators</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Kết hợp generators với async/await:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

(async () => {
  for await (let value of asyncGenerator()) {
    console.log(value);
  }
})();`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Xử lý Lỗi trong Bất đồng bộ</h2>
              <p className="mb-4">Xử lý lỗi đúng cách là rất quan trọng trong lập trình bất đồng bộ:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;  // Re-throw để cho phép xử lý ở cấp cao hơn
  }
}`}</code>
              </pre>
              <p>Luôn nhớ xử lý cả trường hợp thành công và thất bại khi làm việc với code bất đồng bộ.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Event Loop và Bất đồng bộ</h2>
              <p className="mb-4">JavaScript sử dụng một mô hình đơn luồng với Event Loop để xử lý bất đồng bộ:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Call Stack: Nơi các hàm được thực thi</li>
                <li>Callback Queue: Nơi các callback bất đồng bộ chờ được thực thi</li>
                <li>Event Loop: Kiểm tra Call Stack và Callback Queue, đẩy callbacks vào Call Stack khi nó trống</li>
              </ul>
              <p className="mt-4">Hiểu về Event Loop giúp bạn viết code bất đồng bộ hiệu quả hơn và tránh blocking main thread.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
              <p>Lập trình bất đồng bộ là một phần quan trọng của JavaScript hiện đại, cho phép xử lý các tác vụ tốn thời gian mà không làm chặn luồng chính của chương trình. Từ callbacks đơn giản đến Promises và async/await, JavaScript cung cấp nhiều công cụ mạnh mẽ để xử lý bất đồng bộ. Hiểu và sử dụng thành thạo các kỹ thuật này sẽ giúp bạn viết code JavaScript hiệu quả và linh hoạt hơn, đặc biệt trong các ứng dụng web phức tạp.</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

