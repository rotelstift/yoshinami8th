class Article < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_one_attached :image
  has_many :taggings
  has_many :tags, through: :taggings

  def image_url
    image.attached? ? url_for(image) : nil
  end
end
