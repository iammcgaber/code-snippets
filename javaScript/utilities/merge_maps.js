function deepMerge(partA, incoming) {
    let partB = new Map(Object.entries(incoming))
    let merged = new Map();
    partA.forEach((val, key) => {
        if (partA.has(key) && partB.has(key)) {
            if (typeof(partA.get(key)) == "object" && typeof(partB.get(key)) == "object") {
                merged.set(key, { ...val, ...partB.get(key) });
            } else {
                merged.set(key, val);
            }
        } else {
            merged.set(key, val);
        }
    })

      partB.forEach((val, key) => {
          if (!(partA.has(key)) && partB.has(key)) {
              merged.set(key, val);
          }
      })

      return merged;
}


// Examples

let myMap = new Map([
    [1, "One"],
    [2, "Two"],
    ['link', { content: "Foo", enabled: true }], // 'enabled' should remain, even after the merge
    ['foo', 'bar']
])

let obj = {
    foo: { hah: "hah" },
    link: { content: "Foo" }
}

let merged = deepMerge(myMap, obj)
console.log("merged", merged)
