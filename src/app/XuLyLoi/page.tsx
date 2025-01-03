'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

export default function ErrorHandlingJavaScript() {
  const [input, setInput] = React.useState('')
  const [result, setResult] = React.useState('')

  const handleDivision = () => {
    try {
      const number = parseFloat(input)
      if (isNaN(number)) {
        throw new Error('Vui lòng nhập một số hợp lệ')
      }
      if (number === 0) {
        throw new Error('Không thể chia cho 0')
      }
      const result = 10 / number
      setResult(`Kết quả: 10 / ${number} = ${result}`)
    } catch (error) {
      setResult(`Lỗi: `)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="mb-4">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Error Handling in JavaScript"
              width={1200}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold">Xử lý Lỗi trong JavaScript</CardTitle>
          <CardDescription>Khám phá cách xử lý và quản lý lỗi trong JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Giới thiệu</h2>
              <p className="mb-4">Xử lý lỗi là một phần quan trọng trong lập trình JavaScript. Nó giúp bạn dự đoán, phát hiện và xử lý các tình huống bất thường có thể xảy ra trong quá trình thực thi chương trình.</p>
              <p>Hiểu và sử dụng các kỹ thuật xử lý lỗi hiệu quả sẽ giúp bạn tạo ra các ứng dụng JavaScript ổn định và đáng tin cậy hơn.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cơ bản về Xử lý Lỗi</h2>
              <Tabs defaultValue="try-catch">
                <TabsList>
                  <TabsTrigger value="try-catch">Try...Catch</TabsTrigger>
                  <TabsTrigger value="throw">Throw</TabsTrigger>
                </TabsList>
                <TabsContent value="try-catch">
                  <p className="mb-2">Cấu trúc try...catch cho phép bạn xử lý lỗi một cách ưu nhã:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`try {
  // Code có thể gây ra lỗi
  let result = someRiskyOperation();
  console.log(result);
} catch (error) {
  // Xử lý lỗi
  console.error('Đã xảy ra lỗi:', error.message);
} finally {
  // Code luôn được thực thi, bất kể có lỗi hay không
  console.log('Hoàn thành xử lý');
}`}</code>
                  </pre>
                  <p>Khối try...catch...finally giúp bạn kiểm soát luồng thực thi khi xảy ra lỗi.</p>
                </TabsContent>
                <TabsContent value="throw">
                  <p className="mb-2">Từ khóa throw cho phép bạn tạo ra các lỗi tùy chỉnh:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`function divide(a, b) {
  if (b === 0) {
    throw new Error('Không thể chia cho 0');
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error('Lỗi:', error.message);
}`}</code>
                  </pre>
                  <p>Sử dụng throw kết hợp với try...catch giúp bạn xử lý các tình huống lỗi cụ thể.</p>
                </TabsContent>
              </Tabs>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ví dụ Tương tác: Xử lý Lỗi Chia cho 0</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="mb-2">Nhập một số để chia 10 cho số đó:</p>
                <div className="flex space-x-2 mb-2">
                  <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Nhập một số"
                  />
                  <Button onClick={handleDivision}>Chia</Button>
                </div>
                <p>{result}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Các Loại Lỗi Phổ biến</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="syntax-error">
                  <AccordionTrigger>SyntaxError</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Xảy ra khi có lỗi cú pháp trong code:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`// Lỗi cú pháp: thiếu dấu ngoặc đóng
if (true {
  console.log("Hello");
}`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reference-error">
                  <AccordionTrigger>ReferenceError</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Xảy ra khi sử dụng một biến hoặc hàm chưa được định nghĩa:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`// Biến 'x' chưa được định nghĩa
console.log(x);`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="type-error">
                  <AccordionTrigger>TypeError</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Xảy ra khi một toán tử hoặc hàm được sử dụng không phù hợp với kiểu dữ liệu:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`// Không thể gọi một số như một hàm
let number = 123;
number();  // TypeError`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Xử lý Lỗi Bất đồng bộ</h2>
              <p className="mb-4">Khi làm việc với code bất đồng bộ, việc xử lý lỗi cần được thực hiện một cách khác biệt:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`// Sử dụng Promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Lỗi:', error));

// Sử dụng async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Lỗi:', error);
  }
}`}</code>
              </pre>
              <p>Trong code bất đồng bộ, sử dụng .catch() với Promises hoặc try...catch với async/await để xử lý lỗi hiệu quả.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Các Phương pháp Xử lý Lỗi Nâng cao</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Custom Error Classes:</strong> Tạo các lớp lỗi tùy chỉnh để xử lý các tình huống cụ thể trong ứng dụng của bạn.</li>
                <li><strong>Error Boundaries (trong React):</strong> Sử dụng các component đặc biệt để bắt và xử lý lỗi trong cây component.</li>
                <li><strong>Global Error Handling:</strong> Thiết lập xử lý lỗi toàn cục để bắt các lỗi không được xử lý ở các phần khác của ứng dụng.</li>
                <li><strong>Logging:</strong> Sử dụng các dịch vụ logging để ghi lại và theo dõi lỗi trong môi trường sản xuất.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
              <p>Xử lý lỗi hiệu quả là một kỹ năng quan trọng trong lập trình JavaScript. Nó không chỉ giúp ngăn chặn các sự cố không mong muốn mà còn cải thiện trải nghiệm người dùng và giúp bạn dễ dàng debug và bảo trì code. Bằng cách sử dụng các kỹ thuật như try...catch, throw, và xử lý lỗi bất đồng bộ, bạn có thể tạo ra các ứng dụng JavaScript mạnh mẽ và đáng tin cậy hơn. Hãy nhớ rằng, xử lý lỗi không chỉ là việc bắt và hiển thị lỗi, mà còn là việc dự đoán và ngăn chặn chúng từ trước. Thực hành thường xuyên và áp dụng các phương pháp xử lý lỗi trong các dự án của bạn sẽ giúp bạn trở thành một lập trình viên JavaScript giỏi hơn.</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

