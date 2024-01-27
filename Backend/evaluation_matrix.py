# def calculate_eco_score(materials_data, weights=None):
#     if weights is None:
#         # Default weights if not provided
#         weights = {
#             'recyclable': 0.4,
#             'environmental_impact': 0.4,
#             'biodegradable': 0.2
#         }

#     total_score = 0
#     total_materials = len(materials_data)

#     for material in materials_data:
#         material_score = 0
#         for characteristic, weight in weights.items():
#             if characteristic in material:
#                 material_score += material[characteristic] * weight

#         total_score += material_score

#     # Calculate average score
#     if total_materials > 0:
#         eco_score = total_score / total_materials
#     else:
#         eco_score = 0

#     return eco_score
