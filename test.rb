require 'json'

IMAGES_DIR = 'public/images_test'.freeze
CONSTANTS_PATH = 'src/constants/index.js'.freeze

svgs = {}

Dir.glob("#{IMAGES_DIR}/*.svg").each do |file|
  key = File.basename(file, '.svg').split('-').first # Lấy phần đầu tiên trước dấu '-'
  svgs[key.to_sym] = "/images_test/#{File.basename(file)}" # Chuyển key thành symbol
end

content = "export const svgs = #{JSON.pretty_generate(svgs).gsub(/"(\w+)":/, '\1:')};\n"
File.write(CONSTANTS_PATH, content)

puts '✅ SVG constants updated in src/constants/index.js'
