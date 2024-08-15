#!/usr/bin/env python3
"""
This module contains a function to sum a list of floats.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Returns the total sum of  list floats.

    Args:
        input_list (List[float]): The list of float values to sum.

    Returns:
        float: The total sum.
    """
    return sum(input_list)
