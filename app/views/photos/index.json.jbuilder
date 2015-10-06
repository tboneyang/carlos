json.array!(@photos) do |photo|
  json.extract! photo, :id, :type, :title
  json.url photo_url(photo, format: :json)
end
