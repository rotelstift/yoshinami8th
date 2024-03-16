class Tagging < ApplicationRecord
  belongs_to :article
  belongs_to :tag

  validate :tags_count_within_limit, on: :create

  private

  def tags_count_within_limit
    if article.tags.count > 5
      errors.add(:article, 'に付けられるタグの数は５つまでです')
    end
  end
end
