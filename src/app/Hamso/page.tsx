'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

export default function JavaScriptFunctions() {
  const [num1, setNum1] = React.useState('')
  const [num2, setNum2] = React.useState('')
  const [result, setResult] = React.useState('')

  const add = (a: number, b: number) => a + b
  const subtract = (a: number, b: number) => a - b
  const multiply = (a: number, b: number) => a * b
  const divide = (a: number, b: number) => b !== 0 ? a / b : 'Không thể chia cho 0'

  const calculate = (operation: (a: number, b: number) => number | string) => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    if (isNaN(a) || isNaN(b)) {
      setResult('Vui lòng nhập số hợp lệ')
    } else {
      setResult(operation(a, b).toString())
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="mb-4">
            <Image
              src="data:image/jpeg;base64,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"
              alt="JavaScript Functions"
              width={1200}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold">Hàm trong JavaScript</CardTitle>
          <CardDescription>Khám phá cách định nghĩa và sử dụng hàm trong JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Giới thiệu</h2>
              <p className="mb-4">Hàm là một khối code được thiết kế để thực hiện một nhiệm vụ cụ thể. Chúng là nền tảng của lập trình JavaScript, cho phép bạn tổ chức code thành các phần có thể tái sử dụng và dễ quản lý.</p>
              <p>Hiểu và sử dụng hàm hiệu quả là chìa khóa để viết code JavaScript sạch, modular và dễ bảo trì.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Định nghĩa Hàm</h2>
              <Tabs defaultValue="declaration">
                <TabsList>
                  <TabsTrigger value="declaration">Function Declaration</TabsTrigger>
                  <TabsTrigger value="expression">Function Expression</TabsTrigger>
                  <TabsTrigger value="arrow">Arrow Function</TabsTrigger>
                </TabsList>
                <TabsContent value="declaration">
                  <p className="mb-2">Cách truyền thống để định nghĩa một hàm:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`function greet(name) {
  return "Xin chào, " + name + "!";
}

console.log(greet("Alice"));  // Xin chào, Alice!`}</code>
                  </pre>
                  <p>Function declarations được hoisted, nghĩa là chúng có thể được sử dụng trước khi được định nghĩa trong code.</p>
                </TabsContent>
                <TabsContent value="expression">
                  <p className="mb-2">Gán một hàm cho một biến:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`const greet = function(name) {
  return "Xin chào, " + name + "!";
};

console.log(greet("Bob"));  // Xin chào, Bob!`}</code>
                  </pre>
                  <p>Function expressions không được hoisted và chỉ có thể được sử dụng sau khi được định nghĩa.</p>
                </TabsContent>
                <TabsContent value="arrow">
                  <p className="mb-2">Cú pháp ngắn gọn để định nghĩa hàm, được giới thiệu trong ES6:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`const greet = (name) => {
  return "Xin chào, " + name + "!";
};

// Hoặc ngắn gọn hơn cho hàm một dòng:
const greetShort = name => "Xin chào, " + name + "!";

console.log(greetShort("Charlie"));  // Xin chào, Charlie!`}</code>
                  </pre>
                  <p>Arrow functions có cú pháp ngắn gọn và không bind this của riêng chúng.</p>
                </TabsContent>
              </Tabs>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ví dụ Tương tác: Máy Tính Đơn Giản</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex space-x-2 mb-2">
                  <Input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Số thứ nhất"
                  />
                  <Input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Số thứ hai"
                  />
                </div>
                <div className="flex space-x-2 mb-2">
                  <Button onClick={() => calculate(add)}>Cộng</Button>
                  <Button onClick={() => calculate(subtract)}>Trừ</Button>
                  <Button onClick={() => calculate(multiply)}>Nhân</Button>
                  <Button onClick={() => calculate(divide)}>Chia</Button>
                </div>
                <p>Kết quả: {result}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tham số và Đối số</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="parameters">
                  <AccordionTrigger>Tham số Mặc định</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">ES6 cho phép đặt giá trị mặc định cho tham số:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`function greet(name = "Khách") {
  return "Xin chào, " + name + "!";
}

console.log(greet());  // Xin chào, Khách!
console.log(greet("Alice"));  // Xin chào, Alice!`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rest">
                  <AccordionTrigger>Rest Parameters</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Cho phép một hàm nhận số lượng đối số không xác định:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));  // 10`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="spread">
                  <AccordionTrigger>Spread Operator</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Cho phép &quot;trải&quot; một mảng thành các đối số riêng biệt:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`function greet(first, second, third) {
  console.log(first, second, third);
}

const names = ["Alice", "Bob", "Charlie"];
greet(...names);  // Alice Bob Charlie`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Closure và Scope</h2>
              <p className="mb-4">Closure là khả năng của một hàm để &quot;nhớ&quot; và truy cập lexical scope của nó, ngay cả khi hàm đó được thực thi bên ngoài lexical scope đó.</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`function outerFunction(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = outerFunction(5);
console.log(add5(3));  // 8
console.log(add5(7));  // 12`}</code>
              </pre>
              <p>Closures cho phép tạo ra các hàm factory và giúp trong việc tạo ra các biến private trong JavaScript.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Higher-Order Functions</h2>
              <p className="mb-4">Higher-order functions là các hàm có thể nhận hàm khác làm đối số hoặc trả về một hàm.</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`// Hàm nhận một hàm khác làm đối số
function doOperation(x, y, operation) {
  return operation(x, y);
}

// Sử dụng
const result = doOperation(5, 3, (a, b) => a + b);
console.log(result);  // 8

// Hàm trả về một hàm khác
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5));  // 10`}</code>
              </pre>
              <p>Higher-order functions là nền tảng cho lập trình hàm trong JavaScript và được sử dụng rộng rãi trong các thư viện và frameworks hiện đại.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
              <p>Hàm là một khái niệm cốt lõi trong JavaScript, cung cấp cách mạnh mẽ để tổ chức và tái sử dụng code. Từ các cách định nghĩa hàm cơ bản đến các khái niệm nâng cao như closures và higher-order functions, việc nắm vững cách sử dụng hàm sẽ giúp bạn viết code JavaScript hiệu quả và linh hoạt hơn. Hãy thực hành sử dụng các loại hàm khác nhau và khám phá cách chúng có thể cải thiện cấu trúc và chức năng của ứng dụng của bạn.</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

