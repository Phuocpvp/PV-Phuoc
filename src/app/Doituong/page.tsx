'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function JavaScriptObjects() {
  const [objectKey, setObjectKey] = React.useState('')
  const [objectValue, setObjectValue] = React.useState('')
  const [result, setResult] = React.useState('')
  const [currentObject, setCurrentObject] = React.useState({})

  const addProperty = () => {
    if (!objectKey || !objectValue) {
      setResult('Vui lòng nhập cả khóa và giá trị.')
      return
    }

    setCurrentObject(prevObject => ({
      ...prevObject,
      [objectKey]: objectValue
    }))

    setResult(`Đã thêm thuộc tính: ${objectKey}: ${objectValue}`)
    setObjectKey('')
    setObjectValue('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="mb-4">
            <Image
              src="https://i.pinimg.com/736x/5c/55/6d/5c556d8c7ea409bd4ad2c49f4a38c29e.jpg"
              alt="JavaScript Objects"
              width={1200}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold">Đối tượng trong JavaScript</CardTitle>
          <CardDescription>Khám phá cách tạo và sử dụng đối tượng trong JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Giới thiệu</h2>
              <p className="mb-4">Đối tượng trong JavaScript là một cấu trúc dữ liệu cơ bản, cho phép bạn lưu trữ các cặp khóa-giá trị và tạo ra các thực thể phức tạp. Chúng là nền tảng cho lập trình hướng đối tượng trong JavaScript và được sử dụng rộng rãi trong phát triển web hiện đại.</p>
              <p>Hiểu cách tạo, truy cập và thao tác đối tượng là chìa khóa để làm chủ JavaScript và xây dựng các ứng dụng phức tạp.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tạo Đối tượng</h2>
              <Tabs defaultValue="literal">
                <TabsList>
                  <TabsTrigger value="literal">Object Literal</TabsTrigger>
                  <TabsTrigger value="constructor">Constructor Function</TabsTrigger>
                  <TabsTrigger value="class">Class (ES6+)</TabsTrigger>
                </TabsList>
                <TabsContent value="literal">
                  <p className="mb-2">Cách đơn giản nhất để tạo đối tượng:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  sayHello: function() {
    console.log("Xin chào!");
  }
};

console.log(person.name); // "Alice"
person.sayHello(); // "Xin chào!"`}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="constructor">
                  <p className="mb-2">Sử dụng hàm constructor để tạo nhiều đối tượng cùng loại:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Xin chào, tôi là " + this.name);
  };
}

let person1 = new Person("Bob", 25);
let person2 = new Person("Charlie", 35);

person1.sayHello(); // "Xin chào, tôi là Bob"
person2.sayHello(); // "Xin chào, tôi là Charlie"`}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="class">
                  <p className="mb-2">Sử dụng cú pháp class (ES6+) để định nghĩa đối tượng:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg mb-2">
                    <code>{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Xin chào, tôi là " + this.name);
  }
}

let person = new Person("David", 40);
person.sayHello(); // "Xin chào, tôi là David"`}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ví dụ Tương tác: Tạo Đối tượng</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="object-key">Khóa:</Label>
                    <Input
                      id="object-key"
                      type="text"
                      value={objectKey}
                      onChange={(e) => setObjectKey(e.target.value)}
                      placeholder="Nhập khóa"
                    />
                  </div>
                  <div>
                    <Label htmlFor="object-value">Giá trị:</Label>
                    <Input
                      id="object-value"
                      type="text"
                      value={objectValue}
                      onChange={(e) => setObjectValue(e.target.value)}
                      placeholder="Nhập giá trị"
                    />
                  </div>
                </div>
                <Button onClick={addProperty}>Thêm Thuộc tính</Button>
                <pre className="mt-4 p-2 bg-white rounded">
                  {result}
                  {Object.keys(currentObject).length > 0 && (
                    `\n\nĐối tượng hiện tại:\n${JSON.stringify(currentObject, null, 2)}`
                  )}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Truy cập và Thao tác Đối tượng</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="dot-notation">
                  <AccordionTrigger>Dot Notation</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Sử dụng dấu chấm để truy cập thuộc tính:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let person = { name: "Alice", age: 30 };

console.log(person.name); // "Alice"
person.age = 31;
console.log(person.age); // 31`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="bracket-notation">
                  <AccordionTrigger>Bracket Notation</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Sử dụng dấu ngoặc vuông để truy cập thuộc tính động:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let person = { name: "Bob", age: 25 };

let prop = "name";
console.log(person[prop]); // "Bob"

person["is" + "Student"] = true;
console.log(person.isStudent); // true`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="object-methods">
                  <AccordionTrigger>Object Methods</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Các phương thức hữu ích để làm việc với đối tượng:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg">
                      <code>{`let person = { name: "Charlie", age: 35 };

console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Charlie", 35]
console.log(Object.entries(person)); // [["name", "Charlie"], ["age", 35]]

Object.freeze(person); // Ngăn chặn thay đổi đối tượng
Object.seal(person); // Cho phép thay đổi giá trị nhưng không thêm/xóa thuộc tính`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Prototypes và Inheritance</h2>
              <p className="mb-4">JavaScript sử dụng prototypes để thực hiện kế thừa:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function() {
  console.log("Xin chào, tôi là " + this.name);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Gâu gâu!");
};

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayHello(); // "Xin chào, tôi là Buddy"
myDog.bark(); // "Gâu gâu!"`}</code>
              </pre>
              <p>Prototypes cho phép chia sẻ phương thức giữa các đối tượng, tiết kiệm bộ nhớ và tạo cơ chế kế thừa.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Destructuring và Spread Operator</h2>
              <p className="mb-4">ES6+ giới thiệu các cách mạnh mẽ để làm việc với đối tượng:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`// Destructuring
let person = { name: "Alice", age: 30, city: "New York" };
let { name, age } = person;
console.log(name, age); // "Alice" 30

// Spread operator
let newPerson = { ...person, job: "Developer" };
console.log(newPerson); // { name: "Alice", age: 30, city: "New York", job: "Developer" }

// Rest operator in object destructuring
let { name: personName, ...rest } = person;
console.log(personName); // "Alice"
console.log(rest); // { age: 30, city: "New York" }`}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
              <p>Đối tượng là một phần không thể thiếu của JavaScript, cung cấp cách mạnh mẽ để tổ chức và cấu trúc dữ liệu. Từ cách tạo đối tượng đơn giản bằng object literals đến việc sử dụng prototypes cho kế thừa, hiểu rõ về đối tượng sẽ giúp bạn tận dụng tối đa sức mạnh của JavaScript. Các tính năng mới như destructuring và spread operator càng làm cho việc làm việc với đối tượng trở nên linh hoạt và hiệu quả hơn. Hãy thực hành tạo và thao tác đối tượng trong các dự án của bạn để nắm vững khái niệm này và trở thành một lập trình viên JavaScript giỏi hơn.</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

