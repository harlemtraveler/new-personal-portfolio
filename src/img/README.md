### Command-line Usage

Run it on your own images! First, [install Go](https://golang.org/doc/install).

    go get -u github.com/fogleman/primitive
    primitive -i input.png -o output.png -n 100

Small input images should be used (like 256x256px). You don't need the detail anyway and the code will run faster.

| Flag | Default | Description |
| --- | --- | --- |
| `i` | n/a | input file |
| `o` | n/a | output file |
| `n` | n/a | number of shapes |
| `m` | 1 | mode: 0=combo, 1=triangle, 2=rect, 3=ellipse, 4=circle, 5=rotatedrect, 6=beziers, 7=rotatedellipse, 8=polygon |
| `rep` | 0 | add N extra shapes each iteration with reduced search (mostly good for beziers) |
| `nth` | 1 | save every Nth frame (only when `%d` is in output path) |
| `r` | 256 | resize large input images to this size before processing |
| `s` | 1024 | output image size |
| `a` | 128 | color alpha (use `0` to let the algorithm choose alpha for each shape) |
| `bg` | avg | starting background color (hex) |
| `j` | 0 | number of parallel workers (default uses all cores) |
| `v` | off | verbose output |
| `vv` | off | very verbose output |

### Output Formats

Depending on the output filename extension provided, you can produce different types of output.

- `PNG`: raster output
- `JPG`: raster output
- `SVG`: vector output
- `GIF`: animated output showing shapes being added - requires ImageMagick (specifically the `convert` command)

For PNG and SVG outputs, you can also include `%d`, `%03d`, etc. in the filename. In this case, each frame will be saved separately.

You can use the `-o` flag multiple times. This way you can save both a PNG and an SVG, for example.

