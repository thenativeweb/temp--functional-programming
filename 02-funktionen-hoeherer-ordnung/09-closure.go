package main

import "fmt"

func addN(n int) func(int) int {
	return func(x int) int {
		return x + n
	}
}

func main() {
	add10 := addN(10)
	add15 := addN(15)

	fmt.Println(add10(23))
	fmt.Println(add15(23))
}
