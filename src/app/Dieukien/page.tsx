'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function JavaScriptConditionals() {
  const [age, setAge] = React.useState('')
  const [result, setResult] = React.useState('')

  const checkAge = () => {
    const ageNum = parseInt(age)
    if (isNaN(ageNum)) {
      setResult('Vui lòng nhập một số hợp lệ')
    } else if (ageNum < 0) {
      setResult('Tuổi không thể là số âm')
    } else if (ageNum < 18) {
      setResult('Bạn là trẻ vị thành niên')
    } else if (ageNum < 65) {
      setResult('Bạn là người trưởng thành')
    } else {
      setResult('Bạn là người cao tuổi')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="mb-4">
            <Image
              src="data:image/jpeg;base64,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"
              alt="JavaScript Conditionals"
              width={1200}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold">Câu lệnh Điều kiện trong JavaScript</CardTitle>
          <CardDescription>Khám phá cách sử dụng câu lệnh điều kiện để kiểm soát luồng chương trình trong JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Giới thiệu</h2>
              <p className="mb-4">Câu lệnh điều kiện trong JavaScript cho phép bạn thực thi các khối code khác nhau dựa trên các điều kiện cụ thể. Chúng là nền tảng cho việc tạo ra logic quyết định trong chương trình của bạn.</p>
              <p>Hiểu và sử dụng câu lệnh điều kiện hiệu quả là chìa khóa để xây dựng các ứng dụng JavaScript linh hoạt và đáp ứng.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Các Loại Câu lệnh Điều kiện</h2>
              <Tabs defaultValue="if-else">
                <TabsList>
                  <TabsTrigger value="if-else">if...else</TabsTrigger>
                  <TabsTrigger value="switch">switch</TabsTrigger>
                  <TabsTrigger value="ternary">Toán tử ba ngôi</TabsTrigger>
                </TabsList>
                <TabsContent value="if-else">
                  <p className="mb-2">Câu lệnh if...else cơ bản:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`let age = 20;

if (age < 18) {
  console.log("Bạn là trẻ vị thành niên");
} else if (age >= 18 && age < 65) {
  console.log("Bạn là người trưởng thành");
} else {
  console.log("Bạn là người cao tuổi");
}`}</code>
                  </pre>
                  <p>Câu lệnh if...else cho phép bạn kiểm tra nhiều điều kiện và thực thi code tương ứng.</p>
                </TabsContent>
                <TabsContent value="switch">
                  <p className="mb-2">Câu lệnh switch để xử lý nhiều trường hợp:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Bắt đầu tuần mới");
    break;
  case "Friday":
    console.log("Cuối tuần rồi!");
    break;
  default:
    console.log("Một ngày bình thường");
}`}</code>
                  </pre>
                  <p>Switch hữu ích khi bạn cần so sánh một biến với nhiều giá trị khác nhau.</p>
                </TabsContent>
                <TabsContent value="ternary">
                  <p className="mb-2">Toán tử ba ngôi cho câu lệnh điều kiện ngắn gọn:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`let age = 20;
let status = age >= 18 ? "Người trưởng thành" : "Trẻ vị thành niên";
console.log(status);  // "Người trưởng thành"`}</code>
                  </pre>
                  <p>Toán tử ba ngôi là cách ngắn gọn để viết câu lệnh if...else đơn giản.</p>
                </TabsContent>
              </Tabs>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ví dụ Tương tác: Kiểm tra Độ tuổi</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="mb-4">
                  <Label htmlFor="age-input">Nhập tuổi của bạn:</Label>
                  <Input
                    id="age-input"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Nhập tuổi"
                  />
                </div>
                <Button onClick={checkAge}>Kiểm tra</Button>
                <p className="mt-2">{result}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Toán tử Logic</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="and">
                  <AccordionTrigger>AND (&&)</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Trả về true nếu cả hai điều kiện đều đúng:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let x = 5;
let y = 10;
if (x > 0 && y > 0) {
  console.log("Cả x và y đều dương");
}`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="or">
                  <AccordionTrigger>OR (||)</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Trả về true nếu ít nhất một trong hai điều kiện đúng:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let x = 5;
let y = -2;
if (x > 0 || y > 0) {
  console.log("Ít nhất một trong x hoặc y là dương");
}`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="not">
                  <AccordionTrigger>NOT (!)</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Đảo ngược giá trị boolean:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let isAdult = false;
if (!isAdult) {
  console.log("Bạn chưa đủ tuổi");
}`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Truthy và Falsy</h2>
              <p className="mb-4">Trong JavaScript, các giá trị có thể được coi là &quot;truthy&quot; hoặc &quot;falsy&quot; khi được sử dụng trong ngữ cảnh boolean:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Falsy:</strong> false, 0, &quot;&quot; (chuỗi rỗng), null, undefined, NaN</li>
                <li><strong>Truthy:</strong> Tất cả các giá trị khác</li>
              </ul>
              <pre className="bg-gray-100 p-4 rounded-lg mt-4">
                <code>{`if ("") {
  console.log("Điều này sẽ không được in ra");
}

if ("Hello") {
  console.log("Điều này sẽ được in ra");
}

// Short-circuit evaluation
let name = "";
let displayName = name || "Anonymous";
console.log(displayName);  // "Anonymous"`}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Câu lệnh Điều kiện Nâng cao</h2>
              <p className="mb-4">JavaScript cung cấp một số cách nâng cao để sử dụng câu lệnh điều kiện:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Nullish coalescing operator (??):</strong> Trả về operand bên phải khi operand bên trái là null hoặc undefined.</li>
                <li><strong>Optional chaining (?.):</strong> Cho phép đọc giá trị của một thuộc tính lồng nhau mà không cần kiểm tra rõ ràng xem mỗi tham chiếu trong chuỗi có hợp lệ hay không.</li>
              </ul>
              <pre className="bg-gray-100 p-4 rounded-lg mt-4">
                <code>{`// Nullish coalescing
let user = {
  name: "Alice",
  age: 0
};
console.log(user.age ?? 18);  // 0

// Optional chaining
let user = {};
console.log(user?.address?.street);  // undefined`}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
              <p>Câu lệnh điều kiện là một phần không thể thiếu trong lập trình JavaScript, cho phép bạn tạo ra logic quyết định phức tạp và xử lý các tình huống khác nhau trong ứng dụng của mình. Từ câu lệnh if...else cơ bản đến các kỹ thuật nâng cao như nullish coalescing và optional chaining, việc nắm vững các công cụ này sẽ giúp bạn viết code linh hoạt và mạnh mẽ hơn. Hãy thực hành sử dụng các loại câu lệnh điều kiện khác nhau trong các dự án của bạn để tăng cường kỹ năng lập trình JavaScript của mình.</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

