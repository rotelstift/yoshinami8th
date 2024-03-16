class Article < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_one_attached :image
  has_and_belongs_to_many :tags

  def image_url
    image.attached? ? url_for(image) : nil
  end
end
