function duplicates(nums) {
    const counts = {};
    let duplicatesCount = 0;

    nums.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    for (let num in counts) {
        if (counts[num] > 1) {
            duplicatesCount++;
        }
    }

    console.log(duplicatesCount);
}