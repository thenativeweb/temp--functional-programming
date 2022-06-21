# Imperative Programmierung

- Befolgen eines Kochrezeptes
- Schritt-für-Schritt-Anleitung
  - Anweisungen, die man befolgen soll

```asm
mov eax, 23h    ; eax = 23h
mov ebx, 42h    ; ebx = 42h
add eax, ebx    ; eax = eax + ebx
```

- Sehr low-levelig

## Hochsprachen

```basic
X = 23
Y = 42
Z = X + Y
```

```c
int x = 23;
int y = 42;
int z = x + y;
```

## Seltsamkeiten

```c
void main () {
  int x = 23;

  x++;        // Kurzform für …
  x += 1;     // Kurzform für …
  x = x + 1;
}
```

```csharp
public class Foo
{
  private int x = 0;

  public void Bar(int y)
  {
    this.x++;

    if (this.x < 10) {
      return y * 2;
    } else {
      return y * 3;
    }
  }
}

Console.WriteLine(Foo.Bar(23));  // 46
Console.WriteLine(Foo.Bar(23));  // 46
Console.WriteLine(Foo.Bar(23));  // 46
// ...
Console.WriteLine(Foo.Bar(23));  // 46
Console.WriteLine(Foo.Bar(23));  // 69
Console.WriteLine(Foo.Bar(23));  // 69
// ...
```
