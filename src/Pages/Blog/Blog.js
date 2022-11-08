import React from 'react';

const Blog = () => {
    return (
        <div className='bg-blue-200'>
            <div className='my-6'>
                <h3 className='text-3xl font-bold text-black my-4'>
                    1. Difference between SQL and NoSQL?
                </h3>
                <p className='text-xl'>
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). <strong>NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</strong>
                </p>
            </div>
            <div className='my-6'>
                <h3 className='text-3xl font-bold text-black my-4'>
                    2. What is JWT, and how does it work?
                </h3>
                <p className='text-xl'>
                    <strong>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</strong><br />
                    Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
                </p>
            </div>
            <div className='my-6'>
                <h3 className='text-3xl font-bold text-black my-4'>
                    3. What is the difference between javascript and NodeJS?
                </h3>
                <p className='text-xl'>
                    <strong>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</strong><br /> <br />
                    <strong>#</strong> JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />

                    <strong>#</strong> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br />

                    <strong>#</strong> Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                </p>
            </div>
            <div className='my-6'>
                <h3 className='text-3xl font-bold text-black my-4'>
                    4. How does NodeJS handle multiple requests at the same time?
                </h3>
                <p className='text-xl'>
                    NodeJS receives multiple client requests and places them into <strong>EventQueue</strong>. NodeJS is built with the concept of event-driven architecture. NodeJS has its own <strong>EventLoop</strong> which is an infinite loop that receives requests and processes them. <strong>EventLoop</strong> is the listener for the <strong>EventQueue</strong>.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS <strong>cluster</strong> module or <strong>worker_threads</strong> module.
                </p>
            </div>
        </div>
    );
};

export default Blog;