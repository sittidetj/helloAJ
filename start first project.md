คู่มือเริ่มต้นการใช้งาน Angular JS2 ยังไงดี โดย GIT นี้ จะเป็นวิธีการสำหรับ MAC นะครับ

เตรียมความพร้อมก่อนเริ่มเขียน code ก่อนนะ
1. ทำการติดตั้ง NodeJS โดยเข้าไป download ได้ที่ https://nodejs.org/
2. ทำการติดตั้งเครื่องมือที่จะใช้งานในการเขียน code ซึ่งปัจจุบันมีรองรับหลายเครื่องมือ ทั้ง ATOM, SUMLIME TEXT, Webstrome, Visual Studio Code เป็นต้น
    โดยผู้เขียนขอใช้งานเป็น Visual Studio Code ในการทำคู่มือครั้งนี้ ซึ่งสามารถเข้าไป download ได้ที่ https://code.visualstudio.com

เริ่มจัดการกับเครื่องมือในการใช้งาน
1. ทำการติดตั้ง nodeJS หลังจากที่ทำการ download มาเป็นที่เรียบร้อยแล้ว ให้ทำการติดตั้งโปรแกรม หลังจากติดตั้งเป็นที่เรียบร้อยแล้ว ให้ทดสอบโดยการ
    1.1 เปิด terminal 
    1.2 พิมพ์ command node -v 
    ซึ่งผลลัพธ์ที่ได้ จะแสดง version เดียวกับที่ได้ทำการ download มาติดตั้ง

2. ทำการติดตั้ง โปรแกรม Visual Studio Code โดยทำตามขั้นตอนที่โปรแกรมแสดงให้เลือก หลังจากโปรแกรมติดตั้งเรียบร้อยแล้ว โปรแกรมจะอยู่ที่ folder application ของ MAC
    Extension ที่ใช้งานบ่อยๆ ใน Visual Studio Code

3. ทำการติดตั้ง Angular Cli ซึ่ง Angular Cli เป็นเครื่องมือของ Angular ที่ใช้ในการจัดการ file ต่างๆ ให้การเขียนโปรแกรมสะดวกยิ่งขึ้น โดยสามารถศึกษารายละเอียดได้ที่ https://github.com/angular/angular-cli 
    โดยมีขั้นตอนดังนี้
    3.1 เปิด terminal
    3.2 พิมพ์ command npm install -g @angular/cli
    3.3 รอโปรแกรม download file ที่ทำการติดตั้งจนเรียบร้อย
    *** Remark *** 
    - ต้องการติดตั้งแบบระบุ version ให้พิมพ์ command npm install -g @angular/cli@'ตามด้วย version ที่ต้องการ' เช่น ต้องการติดตั้ง version 1.0.0-rc.4 พิมพ์ command npm install -g @angular/cli@1.0.0-rc.4

    - ต้องการลบและติดตั้ง version ใหม่ พิมพ์ command
        npm uninstall -g @angular/cli
        npm cache clean
        npm install -g @angular/cli@latest ***เป็นการระบุให้ติดตั้ง version ล่าสุด

ทดสอบสร้าง project 
1. เปิด terminal 
2. cd ไปยัง folder ที่ต้องการใช้สำหรับสร้าง project 
3. สร้าง folder ที่ต้องการจัดเก็บ project 
    พิมพ์ command mkdir ตามด้วยชื่อ project ที่ต้องการ เช่น mkdir helloAJ
3. cd เข้าไปยัง folder นั้น
    พิมพ์ command cd helloAJ
4. สร้าง angular project 
    พิมพ์ ng new PROJECT-NAME เช่น ng new helloAJ
5. รอโปรแกรมทำการสร้าง projet เรียบร้อย ซึ่ง command จะทำการเชื่อมต่อไปยัง server เพื่อ download flie ที่จำเป็นในการใช้งานสำหรับ angular project จนเสร็จ
6. cd เข้าไปยัง project ที่สร้างไว้
    พิมพ์ cd helloAJ
7. ทดสอบการทำงานของ angular project 
    พิมพ์ ng serve
    โปรแกรมจะทำการ run development server ขึ้นมา โดยสามารถเข้าผ่าน web browser ได้ที่ http://localhost:4200/
    หรือ หากต้องการระบุ default host และ/หรือ port พิมพ์ command ng serve --host 0.0.0.0 --port 4201 ได้
