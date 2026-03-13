**১. TypeScript-এ Interface এবং Type-এর মধ্যে পার্থক্য**

TypeScript-এ ডেটার শেপ (Shape) নির্ধারণ করার জন্য interface এবং type উভয়ই ব্যবহার করা হয়। তবে প্রধান পার্থক্য হলো interface শুধুমাত্র object এর জন্য এবং এতে Declaration Merging (একই নামে একাধিকবার সংজ্ঞা) কাজ করে। অন্যদিকে, type (Type Alias) আরও বহুমুখী, যা primitive type, union, intersection ও tupple তৈরিতে সক্ষম, কিন্তু merging সাপোর্ট করে না।

## Interface vs Type Alias — মূল পার্থক্য

| বৈশিষ্ট্য | Interface (`interface`) | Type Alias (`type`) |
|-----------|-------------------------|---------------------|
| Declaration Merging | সমর্থিত (একই নামে একাধিক `interface` লিখলে TypeScript সেগুলো merge করে) | সমর্থিত নয় (একই নামে আবার `type` লিখলে error হয়) |
| Extends / Composition | `extends` ব্যবহার করে অন্য interface inherit করা যায় | `&` (intersection) ব্যবহার করে একাধিক type combine করা যায় |
| Union Types | সরাসরি union define করা যায় না | সরাসরি union করা যায় (`type A = B \| C`) |
| Primitives / Tuples | primitive বা tuple define করতে ব্যবহার করা যায় না | primitive, tuple, union ইত্যাদি define করা যায় |
| Best For | object structure ও class implementation | union, tuple, function signature এবং complex type |


```ts
// --- Interface ---
interface User {
  name: string;
}

interface User {
  age: number; // Declaration Merging: User এখন { name, age }
}

// --- Type ---
type Point = {
  x: number;
  y: number;
};

type ID = string | number; // Union: সম্ভব
```






**২. any, unknown এবং never টাইপের মধ্যে পার্থক্য**
TypeScript-এ any, unknown এবং never তিনটি ভিন্ন কাজের জন্য ব্যবহৃত হয়। any টাইপ-চেকিং পুরোপুরি বন্ধ করে দেয় (অনিরাপদ), unknown অজানা টাইপের জন্য নিরাপদ বিকল্প যা ব্যবহারের আগে চেক করতে হয়, এবং never এমন value নির্দেশ করে যা কখনোই ঘটার কথা নয় (যেমন- error বা infinity loop)।


**মূল পার্থক্যগুলো নিচে দেওয়া হলো:**

**any (যেকোনো):** এটি সবচেয়ে নমনীয় এবং অনিরাপদ। any টাইপ করা ভেরিয়েবলে যেকোনো ধরনের ডেটা (string, number, object ইত্যাদি) রাখা যায় এবং কোনো টাইপ চেকিং করা হয় না। এটি টাইপস্ক্রিপ্টের মূল উদ্দেশ্যকে নষ্ট করে, তাই এটি এড়িয়ে চলা উচিত।

```typescript
let data: any = "Hello";
data = 10; // কোনো Error নেই
data.runMethod(); // Runtime এ crush করতে পারে
```

**unknown (অজানা):** এটি any-এর একটি নিরাপদ বিকল্প। যখন আপনি জানেন না যে variable টিতে কী ধরনের ডেটা আসবে, তখন unknown ব্যবহার করা হয়। unknown টাইপের কোনো কিছু ব্যবহার করতে হলে প্রথমে সেটির টাইপ নিশ্চিত (Type Narrowing) করতে হয়।

```typescript
let value: unknown = "Hello";
// value.toUpperCase(); // Error দেখাবে

if (typeof value === "string") {
    console.log(value.toUpperCase()); // ঠিক আছে
}
```

**never (কখনোই না):** এটি এমন একটি ফাংশনের return টাইপ হিসেবে ব্যবহৃত হয় যা কখনোই স্বাভাবিকভাবে শেষ হয় না, যেমন- Error ছুঁড়ে দেওয়া (throw) বা অসীম লুপ (infinite loop)। এটি নিশ্চিত করে যে কোডটি আর এগোবে না।

```typescript
function throwError(message: string): never {
    throw new Error(message); // ফাংশনটি কখনোই return করবে না
}
```
