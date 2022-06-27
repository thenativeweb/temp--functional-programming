package main

import (
	"fmt"
	"strings"
)

func Map[TItem any, TResult any](collection []TItem, fn func(TItem) TResult) []TResult {
	var result []TResult

	for _, value := range collection {
		result = append(result, fn(value))
	}

	return result
}

func main() {
	colors := []string{"red", "green", "blue"}
	fmt.Println(colors)
	uppercasedColors := Map(colors, func(color string) string {
		return strings.ToUpper(color)
	})
	fmt.Println(uppercasedColors)

	names := []string{"Dana", "Fox", "Walter"}
	fmt.Println(names)
	nameLengths := Map(names, func(name string) int {
		return len(name)
	})
	fmt.Println(nameLengths)

	primes := []int{2, 3, 5, 7, 11, 13, 17, 19}
	fmt.Println(primes)
	squaredPrimes := Map(primes, func(prime int) int {
		return prime * prime
	})
	fmt.Println(squaredPrimes)
}
