**১. TypeScript-এ Interface এবং Type-এর মধ্যে পার্থক্য**

TypeScript-এ interface এবং type উভয়েই অবজেক্টের গঠন নির্ধারণ করতে ব্যবহৃত হলেও মূল পার্থক্য হলো: interface ডিক্লারেশন মার্জিং (একই নামে একাধিকবার সংজ্ঞায়িত করা) সমর্থন করে এবং extends ব্যবহার করে, যা অবজেক্টের জন্য সেরা। অন্যদিকে, type (type alias) ইউনিয়ন, ইন্টারসেকশন ও প্রিমিটিভ টাইপের জন্য বেশি নমনীয়। 
TypeScript
TypeScript
 +4
মূল পার্থক্যের টেবিল:
বৈশিষ্ট্য 	Interface (interface)	Type Alias (type)
Declaration Merging	সমর্থিত (একই নামে বারবার লেখা যায়)	সমর্থিত নয় (একই নামে এরর দেয়)
Extends/Intersection	extends ব্যবহার করে	& (intersection) ব্যবহার করে
Union Types	সরাসরি সাপোর্ট করে না	সরাসরি সাপোর্ট করে (যেমন: type A = B | C)
Primitives/Tuples	সাপোর্ট করে না	সাপোর্ট করে
Best For	অবজেক্টের স্ট্রাকচার ও ক্লাস ইমপ্লিমেন্টেশন	ইউনিয়ন, টুপল, ফাংশন সিগনেচার
উদাহরণ (GitHub Style):
typescript
// --- Interface ---
interface User {
  name: string;
}
interface User {
  age: number; // Declaration Merging: User এখন {name, age}
}

// --- Type ---
type Point = {
  x: number;
  y: number;
};
type ID = string | number; // Union: সম্ভব
