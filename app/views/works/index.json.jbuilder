json.array!(@works) do |work|
  json.extract! work, :id, :category, :title
  json.url work_url(work, format: :json)
end
