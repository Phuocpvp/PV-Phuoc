'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function JavaScriptModules() {
  const [moduleOutput, setModuleOutput] = React.useState('')

  const simulateModuleImport = () => {
    setModuleOutput('Importing module...')
    setTimeout(() => {
      setModuleOutput('Module imported successfully! Function from module: calculateArea(5, 3) = 15')
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="mb-4">
            <Image
              src="data:image/jpeg;base64,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"
              alt="JavaScript Modules"
              width={1200}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold">JavaScript Modules</CardTitle>
          <CardDescription>Khám phá cách tổ chức và quản lý code với modules trong JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Giới thiệu</h2>
              <p className="mb-4">Modules trong JavaScript cho phép bạn chia nhỏ code thành các phần có thể tái sử dụng và dễ quản lý. Chúng giúp tổ chức code tốt hơn, tránh xung đột tên biến và hỗ trợ việc đóng gói code.</p>
              <p>Sử dụng modules là một phần quan trọng của việc phát triển ứng dụng JavaScript hiện đại, đặc biệt trong các dự án lớn và phức tạp.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cú pháp Module</h2>
              <Tabs defaultValue="export">
                <TabsList>
                  <TabsTrigger value="export">Export</TabsTrigger>
                  <TabsTrigger value="import">Import</TabsTrigger>
                </TabsList>
                <TabsContent value="export">
                  <p className="mb-2">Sử dụng từ khóa &apos;export&apos; để chia sẻ các biến, hàm, hoặc lớp từ một module:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`// math.js
export const PI = 3.14159;

export function square(x) {
  return x * x;
}

export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  area() {
    return PI * this.radius * this.radius;
  }
}`}</code>
                  </pre>
                  <p>Bạn cũng có thể sử dụng export mặc định:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`// utils.js
export default function add(a, b) {
  return a + b;
}`}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="import">
                  <p className="mb-2">Sử dụng từ khóa &apos;import&apos; để sử dụng các thành phần từ module khác:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`// app.js
import { PI, square, Circle } from './math.js';
import add from './utils.js';

console.log(PI);  // 3.14159
console.log(square(4));  // 16

const circle = new Circle(5);
console.log(circle.area());  // 78.53975

console.log(add(2, 3));  // 5`}</code>
                  </pre>
                  <p>Bạn cũng có thể import tất cả các exports như một đối tượng:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`import * as MathModule from './math.js';

console.log(MathModule.PI);
console.log(MathModule.square(4));`}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ví dụ Tương tác: Mô phỏng Import Module</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="mb-4">{moduleOutput}</p>
                <Button onClick={simulateModuleImport}>
                  Import Module
                </Button>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Các Tính năng Nâng cao của Modules</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="dynamic-import">
                  <AccordionTrigger>Dynamic Import</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Cho phép import modules một cách động trong runtime:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`button.addEventListener('click', async () => {
  const module = await import('./api.js');
  module.callAPI();
});`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="module-bundlers">
                  <AccordionTrigger>Module Bundlers</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Công cụ như Webpack, Rollup, hoặc Parcel giúp đóng gói modules:</p>
                    <ul className="list-disc list-inside">
                      <li>Gộp nhiều modules thành một file</li>
                      <li>Tối ưu hóa và minify code</li>
                      <li>Quản lý dependencies</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="circular-dependencies">
                  <AccordionTrigger>Circular Dependencies</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Xử lý khi hai modules import lẫn nhau:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`// a.js
import { b } from './b.js';
export const a = 1;

// b.js
import { a } from './a.js';
export const b = a + 1;

// Cần cẩn thận với circular dependencies`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Quản lý Dependencies với NPM</h2>
              <p className="mb-4">NPM (Node Package Manager) là công cụ quản lý package phổ biến cho JavaScript:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Sử dụng <code>package.json</code> để khai báo dependencies</li>
                <li>Cài đặt packages với lệnh <code>npm install</code></li>
                <li>Sử dụng <code>import</code> để sử dụng các packages đã cài đặt</li>
              </ul>
              <pre className="bg-gray-100 p-4 rounded-lg mt-4">
                <code>{`// Cài đặt package
npm install lodash

// Sử dụng trong code
import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
console.log(_.sum(array));  // 15`}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Module Resolution</h2>
              <p className="mb-4">JavaScript sử dụng các quy tắc để tìm và load modules:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Đường dẫn tương đối: <code>import &apos;./module.js&apos;</code></li>
                <li>Đường dẫn tuyệt đối: <code>import &apos;/modules/module.js&apos;</code></li>
                <li>Modules từ node_modules: <code>import &apos;lodash&apos;</code></li>
              </ul>
              <p className="mt-4">Hiểu rõ cách JavaScript resolve modules giúp tránh các lỗi import và cấu hình dự án hiệu quả hơn.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
              <p>Modules là một phần không thể thiếu trong phát triển JavaScript hiện đại. Chúng cung cấp cách tổ chức code hiệu quả, tăng khả năng tái sử dụng và bảo trì. Từ cú pháp cơ bản của export và import đến các tính năng nâng cao như dynamic import và sử dụng module bundlers, việc nắm vững các khái niệm về modules sẽ giúp bạn xây dựng các ứng dụng JavaScript lớn và phức tạp một cách dễ dàng hơn. Hãy thực hành sử dụng modules trong các dự án của bạn để tận dụng tối đa sức mạnh của chúng!</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

