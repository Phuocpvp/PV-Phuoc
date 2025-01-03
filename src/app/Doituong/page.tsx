import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DoiTuong() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Đối tượng trong JavaScript</CardTitle>
          <CardDescription>Khái niệm về đối tượng và cách sử dụng</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose lg:prose-xl">
            <p className="lead">
              Đối tượng là một cấu trúc dữ liệu trong JavaScript cho phép bạn lưu trữ các cặp key-value và các phương thức.
            </p>
            
            <h2>Định nghĩa đối tượng</h2>
            <p>
              Trong JavaScript, bạn có thể tạo đối tượng bằng cách sử dụng dấu ngoặc nhọn <code>{'{}'}</code> hoặc từ khóa <code>new Object()</code>.
            </p>

            <h2>Thuộc tính và phương thức</h2>
            <ul>
              <li><strong>Thuộc tính</strong>: Các biến được định nghĩa trong đối tượng</li>
              <li><strong>Phương thức</strong>: Các hàm được định nghĩa trong đối tượng</li>
            </ul>

            <h2>Ví dụ</h2>
            <pre><code>{`
let sinhVien = {
  ten: "Nguyen Van A",
  tuoi: 20,
  diemTrungBinh: 8.5,
  hienThiThongTin: function() {
    console.log("Tên: " + this.ten + ", Tuổi: " + this.tuoi);
  }
};

console.log(sinhVien.ten);  // "Nguyen Van A"
sinhVien.hienThiThongTin();  // "Tên: Nguyen Van A, Tuổi: 20"
            `}</code></pre>

            <p>
              Trong ví dụ trên, chúng ta đã tạo một đối tượng <code>sinhVien</code> với các thuộc tính và một phương thức.
            </p>

            <h2>Kết luận</h2>
            <p>
              Đối tượng là một phần quan trọng của JavaScript, cho phép bạn tổ chức và cấu trúc dữ liệu một cách hiệu quả. Hiểu về đối tượng là chìa khóa để làm chủ lập trình hướng đối tượng trong JavaScript.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}

