// need to move the cursor back so that we can create the low-fidelity
// leverage the \r and setTimeout

const loopRefs = ["/", "-", "\\", "|"]
let i = 1
for (const loopRef of loopRefs) {
  i++;
  setTimeout(() => {
    process.stdout.write(`\r${loopRef}     `)
  }, 300 * i);
};
for (const loopRef of loopRefs) {
  i++;
  setTimeout(() => {
    process.stdout.write(`\r${loopRef}     `)
  }, 300 * i);
};
setTimeout(() => {
  process.stdout.write(`\n`)
}, 300 * (i + 1))


// ... fill in the rest yourself ...