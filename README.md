# Userowl Website

## Font Subsetting

pyftsubset Inter-roman.var.woff2 \
  --unicodes="U+0020-007F,U+00A0-00FF,U+0100-017F,U+2192" \
  --layout-features="cv02,cv03,cv04,cv11" \
  --flavor="woff2" \
  --output-file="Inter-subset.woff2"
