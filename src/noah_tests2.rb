def highest_prod(matrix)
  max_prod = 0
  columns = []
  (0..matrix.length).to_a.each do |counter|
    column = []
    matrix.each do |row|
      column << row[counter]
    end
    columns << column
  end

  matrix.each do |row|
    subsubs = row.slice_when { |i, j| i == 0 || j == 0 }.map { |subarray| subarray.reject { |i| i == 0 } }.to_a
    subsubs.each do |subsub|
      if subsub.length > 1
        row_product = 1
        subsub.each do |subsub_element|
          row_product *= subsub_element if !subsub_element.nil?
        end
        max_prod = row_product if row_product > max_prod
      end
    end
  end

  columns.each do |column|
    subsubs = column.slice_when { |i, j| i == 0 || j == 0 }.map { |subarray| subarray.reject { |i| i == 0 } }.to_a
    subsubs.each do |subsub|
      if subsub.length > 1
        row_product = 1
        subsub.each do |subsub_element|
          row_product *= subsub_element if !subsub_element.nil?
        end
        max_prod = row_product if row_product > max_prod
      end
    end
  end
  max_prod > 1 ? max_prod : 0
end

# matrix = [[2, 1, 4, 1], [0, 4, 8, 1], [1, 0, 10, 0]]
# matrix = [[2, 0, 4, 0], [0, 0, 0, 0], [1, 0, 10, 0]]
matrix = [[24, 13, 16, 0, 28, 0, 25, 0, 2, 0, 15, 0, 26], [4, 28, 25, 8, 28, 0, 13, 0, 30, 10, 0, 11, 30], [0, 2, 9, 0, 23, 0, 8, 25, 26, 15, 4, 5, 18], [28, 8, 6, 0, 25, 29, 14, 29, 25, 9, 24, 3, 0], [12, 14, 29, 2, 3, 0, 20, 28, 0, 16, 10, 28, 0], [0, 0, 0, 17, 29, 14, 4, 0, 1, 0, 0, 22, 13], [17, 21, 6, 0, 0, 19, 14, 13, 20, 23, 21, 24, 10], [13, 0, 7, 9, 27, 9, 10, 20, 0, 26, 17, 19, 9], [5, 22, 0, 21, 1, 0, 21, 10, 24, 0, 28, 13, 0], [16, 8, 5, 8, 29, 15, 22, 0, 0, 26, 29, 10, 2], [7, 0, 9, 0, 22, 0, 30, 0, 8, 18, 0, 5, 18], [25, 14, 0, 3, 0, 9, 0, 29, 20, 17, 16, 8, 0], [1, 8, 0, 30, 17, 22, 18, 0, 10, 0, 23, 13, 5], [17, 20, 0, 5, 20, 29, 21, 7, 19, 21, 22, 0, 24], [30, 4, 19, 12, 12, 11, 20, 16, 15, 0, 0, 2, 8]]
# matrix = [[2, 1, 4, 1, 10], [0, 0, 0, 1, 0], [1, 0, 10, 0, 5],
# [0, 1, 4, 3, 6]]

puts highest_prod(matrix)
# highest_prod(matrix)
# def highest_prod(matrix)
#   max_prod = 0
#   matrix.each do |submatrix|
#     subsubs = array.slice_when { |i, j| i == 0 || j == 0 }.map { |subarray| subarray.reject { |i| i == 0 } }.to_a
#     row_product = 1
#     subsubs.each do |row_element|
#       row_product *= row_element
#     end
#     max_prod = row_product if row_product > max_prod
#   end
#   (0...matrix.length).to_a.each do |counter|
#     column_product = 1
#     matrix.each do |submatrix|
#       column_product *= submatrix[counter] if submatrix[counter] > 0
#       puts column_product
#     end
#     max_prod = column_product if column_product > max_prod
#   end
#     # your code here
#     return max_prod
# end

# matrix = [[2, 1, 4, 1], [0, 4, 8, 1], [1, 0, 10, 0]]

# puts highest_prod(matrix)
