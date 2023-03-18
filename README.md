# ninja-lawyer-server

Update: http://localhost:5000/api/users/update/640a1ae7cf66326f43b8ee5f (put)
data: {
"update_data":{
"name": "Bhu Pen",
"email": "bhu@pen.net",
"phone": "+12345678910"
}
}

Post: http://localhost:5000/api/users/add (post)
data: {
"UID": "firebase UID",
"name": "Bhu Pen",
"email": "bhu@pen.net",
"phone": "+12345678910"
}

Get details: http://localhost:5000/api/users/get/F3f9urLY0aO0gaYeKB2TzH7aNgg2 (get)

Get logs: http://localhost:5000/api/users/get-logs/640a1ae7cf66326f43b8ee5f

Lawyer - UPDATE - PUT : http://localhost:5000/api/users/lawyer/update/UID
data: {\_id: { $oid: "6415a4373fe5ee301cec9a22" },
fname: "Abhisekh",
email: "abishekh@gmail.com",
contact: "+91 1849849498",
state: "New Delhi",
city: "Connaught Place",
pincode: "110001",
experience: "2",
rate: "19",
language: ["English", " hindi"],
specialties: ["Cyber crime", " real estate"],
summary: "test summary for abhisekh",
rating: { $numberInt: "0" },
review: { $numberInt: "0" },
UID: "U04",
timestamp: { $date: { $numberLong: "1679138584766" } },}
