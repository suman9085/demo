//=======nested if============
//outer loop => row
//inner loop => column
// for (i = 1; i <= 3; ++i) {
//   for (j = 1; j <= i; ++j) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }
//
// for (i = 5; i >= 1; i--) {
//   // outer loop (rows)
//   for (j = 1; j <= i; j++) {
//     // inner loop (columns)
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n"); // next line
// }

// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(j + "");
//   }

//   for (k = 5; k > i; k--) {
//     process.stdout.write("*");
//   }

//   process.stdout.write("\n"); // next line
// }
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    process.stdout.write(j + "");
  }
  for (k = i - 1; k >= 1; k--) {
    process.stdout.write(k + "");
  }
  process.stdout.write("\n");
}

// for (i = 5; i >= 1; i--) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }
