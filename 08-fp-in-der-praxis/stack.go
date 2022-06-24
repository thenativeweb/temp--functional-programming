package main

import "fmt"

type Stack struct {
	Values []float64
}

func (stack Stack) IsEmpty() bool {
	return len(stack.Values) == 0
}

func IsStackEmpty(stack Stack) bool {
	return len(stack.Values) == 0
}

func MainStack() {
	stack := Stack{}

	fmt.Println(stack.IsEmpty())
	fmt.Println(IsStackEmpty(stack))
}
