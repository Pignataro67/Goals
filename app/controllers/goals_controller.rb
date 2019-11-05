class GoalsController < ApplicationController
  
  def index
    @goals = Goal.all
    render json: @goals
  end
  
  def show
    @goal = Goal.find(params[:id])
    render json: @goal, status: 200
  end
end