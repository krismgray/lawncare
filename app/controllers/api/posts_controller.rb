class Api::PostsController < ApplicationController
  def index
    render json: Post.order(created_at: :desc)
  end

  def create
    post = Post.create( name: params[:name])
    render json: post
  end

  def destroy
    Post.find(params[:id]).destroy
  end

end
