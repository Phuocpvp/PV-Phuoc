'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function JavaScriptVariables() {
  const [variableName, setVariableName] = React.useState('')
  const [variableValue, setVariableValue] = React.useState('')
  const [variableType, setVariableType] = React.useState('let')
  const [result, setResult] = React.useState('')

  const declareVariable = () => {
    if (!variableName || !variableValue) {
      setResult('Vui lòng nhập cả tên và giá trị biến.')
      return
    }

    let declaration = ''
    switch (variableType) {
      case 'var':
        declaration = `var ${variableName} = ${variableValue};`
        break
      case 'let':
        declaration = `let ${variableName} = ${variableValue};`
        break
      case 'const':
        declaration = `const ${variableName} = ${variableValue};`
        break
    }

    setResult(`Khai báo biến: ${declaration}
Kiểu dữ liệu: ${typeof eval(variableValue)}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="mb-4">
            <Image
              src="https://i.pinimg.com/736x/33/9a/c6/339ac67ea1cc43da33c95690ecf2fda7.jpg"
              alt="JavaScript Variables"
              width={1200}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold">Biến trong JavaScript</CardTitle>
          <CardDescription>Khám phá cách khai báo và sử dụng biến trong JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Giới thiệu</h2>
              <p className="mb-4">Biến trong JavaScript là các container để lưu trữ dữ liệu. Chúng là nền tảng của bất kỳ ngôn ngữ lập trình nào, cho phép bạn lưu trữ, truy cập và thao tác dữ liệu trong chương trình của mình.</p>
              <p>Hiểu cách khai báo và sử dụng biến hiệu quả là chìa khóa để viết code JavaScript rõ ràng và dễ bảo trì.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Khai báo Biến</h2>
              <Tabs defaultValue="let">
                <TabsList>
                  <TabsTrigger value="var">var</TabsTrigger>
                  <TabsTrigger value="let">let</TabsTrigger>
                  <TabsTrigger value="const">const</TabsTrigger>
                </TabsList>
                <TabsContent value="var">
                  <p className="mb-2">Cách khai báo biến truyền thống (không khuyến khích trong code hiện đại):</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`var x = 5;
var name = "Alice";
var isStudent = true;

// var có phạm vi function hoặc global
function example() {
  var y = 10;
  if (true) {
    var y = 20; // Cùng biến y
    console.log(y); // 20
  }
  console.log(y); // 20
}`}</code>
                  </pre>
                  <p>var có phạm vi function hoặc global và có thể được khai báo lại.</p>
                </TabsContent>
                <TabsContent value="let">
                  <p className="mb-2">Khai báo biến với phạm vi block (ES6+):</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`let x = 5;
let name = "Bob";
let isStudent = false;

// let có phạm vi block
function example() {
  let y = 10;
  if (true) {
    let y = 20; // Biến y mới trong block này
    console.log(y); // 20
  }
  console.log(y); // 10
}`}</code>
                  </pre>
                  <p>let có phạm vi block và không thể được khai báo lại trong cùng một phạm vi.</p>
                </TabsContent>
                <TabsContent value="const">
                  <p className="mb-2">Khai báo hằng số (ES6+):</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`const PI = 3.14159;
const MAX_SIZE = 100;
const CONFIG = { api: "https://api.example.com" };

// const không thể được gán lại
// PI = 3.14; // Lỗi

// Nhưng nếu là object, các thuộc tính có thể thay đổi
CONFIG.api = "https://new-api.example.com"; // Hợp lệ`}</code>
                  </pre>
                  <p>const dùng để khai báo hằng số và không thể được gán lại, nhưng nếu giá trị là object, các thuộc tính của object có thể thay đổi.</p>
                </TabsContent>
              </Tabs>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ví dụ Tương tác: Khai báo Biến</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label htmlFor="variable-type">Loại biến:</Label>
                    <select
                      id="variable-type"
                      className="w-full p-2 border rounded"
                      value={variableType}
                      onChange={(e) => setVariableType(e.target.value)}
                    >
                      <option value="var">var</option>
                      <option value="let">let</option>
                      <option value="const">const</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="variable-name">Tên biến:</Label>
                    <Input
                      id="variable-name"
                      type="text"
                      value={variableName}
                      onChange={(e) => setVariableName(e.target.value)}
                      placeholder="Nhập tên biến"
                    />
                  </div>
                  <div>
                    <Label htmlFor="variable-value">Giá trị biến:</Label>
                    <Input
                      id="variable-value"
                      type="text"
                      value={variableValue}
                      onChange={(e) => setVariableValue(e.target.value)}
                      placeholder="Nhập giá trị biến"
                    />
                  </div>
                </div>
                <Button onClick={declareVariable}>Khai báo Biến</Button>
                <pre className="mt-4 p-2 bg-white rounded">{result}</pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Phạm vi Biến</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="global">
                  <AccordionTrigger>Phạm vi Global</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Biến được khai báo bên ngoài bất kỳ function nào:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let globalVar = "Tôi là biến global";

function showGlobal() {
  console.log(globalVar); // Có thể truy cập globalVar
}

showGlobal(); // "Tôi là biến global"`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="local">
                  <AccordionTrigger>Phạm vi Local</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Biến được khai báo bên trong một function:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`function showLocal() {
  let localVar = "Tôi là biến local";
  console.log(localVar); // "Tôi là biến local"
}

showLocal();
// console.log(localVar); // Lỗi: localVar is not defined`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="block">
                  <AccordionTrigger>Phạm vi Block</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Biến được khai báo bên trong một block (với let và const):</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`if (true) {
  let blockVar = "Tôi là biến block";
  console.log(blockVar); // "Tôi là biến block"
}

// console.log(blockVar); // Lỗi: blockVar is not defined`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Hoisting</h2>
              <p className="mb-4">Hoisting là hành vi của JavaScript di chuyển khai báo lên đầu phạm vi của chúng.</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`console.log(x); // undefined
var x = 5;

// Tương đương với:
var x;
console.log(x); // undefined
x = 5;

// Với let và const
// console.log(y); // Lỗi: Cannot access 'y' before initialization
let y = 10;`}</code>
              </pre>
              <p>var được hoisted và khởi tạo với undefined, trong khi let và const được hoisted nhưng không khởi tạo (Temporal Dead Zone).</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kiểu dữ liệu của Biến</h2>
              <p className="mb-4">JavaScript là một ngôn ngữ động, cho phép biến thay đổi kiểu dữ liệu:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`let x = 5; // Number
console.log(typeof x); // "number"

x = "Hello"; // String
console.log(typeof x); // "string"

x = true; // Boolean
console.log(typeof x); // "boolean"

x = null; // Null
console.log(typeof x); // "object" (đây là một bug lịch sử trong JavaScript)

x = undefined; // Undefined
console.log(typeof x); // "undefined"

x = { name: "Alice" }; // Object
console.log(typeof x); // "object"

x = [1, 2, 3]; // Array (vẫn là object trong JavaScript)
console.log(typeof x); // "object"

x = function() {}; // Function
console.log(typeof x); // "function"`}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
              <p>Biến là một khái niệm cơ bản nhưng quan trọng trong JavaScript. Hiểu cách khai báo, sử dụng và quản lý phạm vi của biến sẽ giúp bạn viết code JavaScript hiệu quả và tránh được nhiều lỗi phổ biến. Từ việc chọn giữa var, let, và const đến việc hiểu về hoisting và kiểu dữ liệu động, mỗi khía cạnh của biến đều đóng vai trò quan trọng trong việc xây dựng ứng dụng JavaScript mạnh mẽ và dễ bảo trì. Hãy thực hành sử dụng biến trong các ngữ cảnh khác nhau để nắm vững cách chúng hoạt động và tác động đến chương trình của bạn.</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

