**১. TypeScript-এ Interface এবং Type-এর মধ্যে পার্থক্য**

TypeScript-এ ডেটার শেপ (Shape) নির্ধারণ করার জন্য interface এবং type উভয়ই ব্যবহার করা হয়। তবে প্রধান পার্থক্য হলো interface শুধুমাত্র object এর জন্য এবং এতে Declaration Merging (একই নামে একাধিকবার সংজ্ঞা) কাজ করে। অন্যদিকে, type (Type Alias) আরও বহুমুখী, যা primitive type, union, intersection ও tupple তৈরিতে সক্ষম, কিন্তু merging সাপোর্ট করে না।

## Interface vs Type Alias — মূল পার্থক্য

| বৈশিষ্ট্য | Interface (`interface`) | Type Alias (`type`) |
|-----------|-------------------------|---------------------|
| Declaration Merging | সমর্থিত — একই নামে একাধিক `interface` লিখলে TypeScript সেগুলো merge করে | সমর্থিত নয় — একই নামে আবার `type` লিখলে error হয় |
| Extends / Composition | `extends` ব্যবহার করে অন্য interface inherit করা যায় | `&` (intersection) ব্যবহার করে একাধিক type combine করা যায় |
| Union Types | সরাসরি union define করা যায় না | সরাসরি union করা যায় (`type A = B \| C`) |
| Primitives / Tuples | primitive বা tuple define করতে ব্যবহার করা যায় না | primitive, tuple, union ইত্যাদি define করা যায় |
| Best For | object structure ও class implementation | union, tuple, function signature এবং complex type |
