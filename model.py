from rules import latest_financial_index, iscr_flag, total_revenue_5cr_flag, iscr, borrowing_to_revenue_flag
import json


def probe_model_5l_profit(data: dict):
    """
    Evaluate various financial flags for the model.

    This function calculates and returns flags based on different financial parameters,
    such as total revenue, borrowing to revenue ratio, and ISCR (Interest Service Coverage Ratio).

    Parameters:
    - data (dict): A dictionary containing financial data.

    Returns:
    - dict: A dictionary containing the evaluated financial flags.
    """
    # Get the index of the latest standalone financial data
    latest_financial_index_value = latest_financial_index(data)

    # Evaluate the flag for total revenue (greater than 5 crore)
    total_revenue_5cr_flag_value = total_revenue_5cr_flag(
        data, latest_financial_index_value
    )

    # Evaluate the flag for borrowing to revenue ratio
    borrowing_to_revenue_flag_value = borrowing_to_revenue_flag(
        data, latest_financial_index_value
    )

    # Evaluate the ISCR flag
    iscr_flag_value = iscr_flag(data, latest_financial_index_value)

    # Return all flags in a structured format
    return {
        "flags": {
            "TOTAL_REVENUE_5CR_FLAG": total_revenue_5cr_flag_value,
            "BORROWING_TO_REVENUE_FLAG": borrowing_to_revenue_flag_value,
            "ISCR_FLAG": iscr_flag_value,
        }
    }


if __name__ == "__main__":
    # Open and load the JSON data from the data.json file
    with open("data.json", "r") as file:
        content = file.read()
        # Convert the file content into a dictionary
        data = json.loads(content)

        # Evaluate the financial flags using the probe_model_5l_profit function
        result = probe_model_5l_profit(data["data"])

        # Print the results to the console
        print(result)
