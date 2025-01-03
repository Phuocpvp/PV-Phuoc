'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LoopsInJavaScript() {
  const [count, setCount] = React.useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="mb-4">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Vòng lặp trong JavaScript"
              width={1200}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold">Vòng lặp trong JavaScript</CardTitle>
          <CardDescription>Khám phá cách lặp lại và thực thi code nhiều lần trong JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Giới thiệu</h2>
              <p className="mb-4">Vòng lặp trong JavaScript là một cấu trúc điều khiển cho phép bạn thực thi một khối code nhiều lần. Chúng rất hữu ích khi bạn muốn tự động hóa các tác vụ lặp đi lặp lại hoặc xử lý các bộ dữ liệu lớn. JavaScript cung cấp nhiều loại vòng lặp khác nhau, mỗi loại phù hợp cho các tình huống cụ thể.</p>
              <p>Hiểu và sử dụng vòng lặp hiệu quả là một kỹ năng quan trọng trong lập trình JavaScript, giúp bạn viết code ngắn gọn và hiệu quả hơn.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Các Loại Vòng lặp</h2>
              <Tabs defaultValue="for">
                <TabsList>
                  <TabsTrigger value="for">for</TabsTrigger>
                  <TabsTrigger value="while">while</TabsTrigger>
                  <TabsTrigger value="dowhile">do...while</TabsTrigger>
                </TabsList>
                <TabsContent value="for">
                  <p className="mb-2">Vòng lặp for thường được sử dụng khi bạn biết trước số lần lặp:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Outputs: 0, 1, 2, 3, 4`}</code>
                  </pre>
                  <p>Vòng lặp for bao gồm ba phần: khởi tạo, điều kiện, và biểu thức tăng/giảm.</p>
                </TabsContent>
                <TabsContent value="while">
                  <p className="mb-2">Vòng lặp while thực thi code miễn là điều kiện vẫn đúng:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Outputs: 0, 1, 2, 3, 4`}</code>
                  </pre>
                  <p>Vòng lặp while kiểm tra điều kiện trước khi thực thi code.</p>
                </TabsContent>
                <TabsContent value="dowhile">
                  <p className="mb-2">Vòng lặp do...while thực thi code ít nhất một lần trước khi kiểm tra điều kiện:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Outputs: 0, 1, 2, 3, 4`}</code>
                  </pre>
                  <p>Vòng lặp do...while đảm bảo code được thực thi ít nhất một lần.</p>
                </TabsContent>
              </Tabs>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ví dụ Tương tác</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="mb-2">Số lần đếm: {count}</p>
                <div className="space-x-2">
                  <Button onClick={incrementCount}>Tăng</Button>
                  <Button onClick={resetCount} variant="outline">Đặt lại</Button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Các Vòng lặp Đặc biệt</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="forof">
                  <AccordionTrigger>for...of</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Lặp qua các giá trị của một đối tượng có thể lặp (như mảng).</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
  console.log(fruit);
}
// Outputs: apple, banana, orange`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="forin">
                  <AccordionTrigger>for...in</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Lặp qua các thuộc tính của một đối tượng.</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let person = {name: 'John', age: 30, job: 'developer'};
for (let key in person) {
  console.log(key + ': ' + person[key]);
}
// Outputs: 
// name: John
// age: 30
// job: developer`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="foreach">
                  <AccordionTrigger>forEach()</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Phương thức của mảng để lặp qua từng phần tử.</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number * 2);
});
// Outputs: 2, 4, 6, 8, 10`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Điều khiển Vòng lặp</h2>
              <p className="mb-4">JavaScript cung cấp các câu lệnh để kiểm soát luồng của vòng lặp:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>break</strong>: Thoát khỏi vòng lặp ngay lập tức</li>
                <li><strong>continue</strong>: Bỏ qua phần còn lại của vòng lặp hiện tại và chuyển đến lần lặp tiếp theo</li>
              </ul>
              <pre className="bg-gray-100 p-4 rounded-lg mt-4">
                <code>{`for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;  // Thoát khỏi vòng lặp khi i = 3
  }
  console.log(i);
}
// Outputs: 0, 1, 2

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;  // Bỏ qua lần lặp khi i = 2
  }
  console.log(i);
}
// Outputs: 0, 1, 3, 4`}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Vòng lặp Lồng nhau</h2>
              <p className="mb-4">Vòng lặp lồng nhau là khi bạn đặt một vòng lặp bên trong một vòng lặp khác. Chúng hữu ích khi làm việc với cấu trúc dữ liệu đa chiều.</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
// Outputs:
// 0 0, 0 1, 0 2
// 1 0, 1 1, 1 2
// 2 0, 2 1, 2 2`}</code>
              </pre>
              <p>Cẩn thận khi sử dụng vòng lặp lồng nhau vì chúng có thể làm chậm hiệu suất nếu được sử dụng không đúng cách.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Các Phương pháp Thay thế cho Vòng lặp</h2>
              <p className="mb-4">Trong JavaScript hiện đại, có nhiều phương pháp thay thế cho vòng lặp truyền thống:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>map()</strong>: Tạo mảng mới bằng cách áp dụng một hàm cho mỗi phần tử</li>
                <li><strong>filter()</strong>: Tạo mảng mới với các phần tử thỏa mãn điều kiện</li>
                <li><strong>reduce()</strong>: Giảm mảng thành một giá trị duy nhất</li>
                <li><strong>some()</strong> và <strong>every()</strong>: Kiểm tra điều kiện trên các phần tử của mảng</li>
              </ul>
              <p className="mt-4">Các phương pháp này thường dẫn đến code sạch hơn và ít dễ mắc lỗi hơn so với vòng lặp truyền thống.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
              <p>Vòng lặp là một công cụ mạnh mẽ trong JavaScript, cho phép bạn tự động hóa các tác vụ lặp đi lặp lại và xử lý dữ liệu hiệu quả. Từ vòng lặp for cơ bản đến các phương thức mảng nâng cao, hiểu và sử dụng thành thạo các loại vòng lặp khác nhau sẽ giúp bạn viết code JavaScript hiệu quả và linh hoạt hơn. Hãy thực hành với các ví dụ và dự án thực tế để nắm vững các khái niệm này!</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

