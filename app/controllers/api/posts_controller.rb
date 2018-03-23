class Api::PostsController < ApplicationController
  def index
    render json: Post.order(created_at: :desc)
  end

  def create
    post = Post.create(name: params[:name], body: params[:body], value: params[:value] )
    render json: post
  end

  def destroy
    Post.find(params[:id]).destroy
  end

  private
  def post_params
    params.require(:name, :body, :rating)
  end

end
