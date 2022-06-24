package main

import "errors"

func Sqrt(value float64) (float64, error) {
	if value < 0 {
		return 0, errors.New("can not calculate square root of negative number")
	}

	// ...

	return value, nil
}
