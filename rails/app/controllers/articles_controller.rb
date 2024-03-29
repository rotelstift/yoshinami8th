class ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show update destroy ]

  # GET /articles
  def index
    @articles = Article.with_attached_image.all.order(id: "DESC")

    render json: @articles, methods: [:image_url]
  end

  # GET /articles/:slug
  def list
    @articles = Article.with_attached_image
      .joins(:tags)
      .where(tags: { slug: params[:slug] })
      .order(id: "DESC")

    render json: @articles, methods: [:image_url]
  end

  # GET /articles/1
  def show
    render json: @article.as_json(include: {taggings: {only: :tag_id}}, methods: [:image_url])
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created, location: @article, methods: [:image_url]
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article, methods: [:image_url]
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :image, :body_text, tag_ids: [])
    end
end
