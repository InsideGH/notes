defmodule Account do
  def balance(initial, spending) do
    initial - spending
  end

  def print_sum do
    1..10
    |> Enum.sum
    |> IO.puts
  end

end

current_balance = Account.balance(1000, 200)
IO.puts "Current balance: US $#{current_balance}"

Account.print_sum
