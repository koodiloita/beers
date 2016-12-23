import pandas as pd


COL_TYPE = 'Tyyppi'
BEER_TYPE_VALUE = 'oluet'
COL_ALCOHOL = 'Alkoholi-%'
COL_COUNTRY = 'Valmistusmaa'
COL_WORT_STRENGTH = 'Kantavierrep-%'
COL_PRODUCER = 'Valmistaja'
COL_EBU = 'Katkerot EBU'
COL_EBC_COLOR = 'Väri EBC'
COL_BEER_TYPE = 'Oluttyyppi'
COL_NAME = 'Nimi'
EBC_COLOR_VALUES = [
    (2, '#FFE699'),
    (4, '#FFD878'),
    (6, '#FFCA5A'),
    (8, '#FFBF42'),
    (10, '#FBB123'),
    (12, '#F8A600'),
    (14, '#F39C00'),
    (16, '#EA8F00'),
    (18, '#E58500'),
    (20, '#DE7C00'),
    (22, '#D77200'),
    (24, '#CF6900'),
    (26, '#CB6200'),
    (28, '#C35900'),
    (30, '#BB5100'),
    (32, '#B54C00'),
    (33, '#B04500'),
    (35, '#A63E00'),
    (37, '#A13700'),
    (39, '#9B3200'),
    (41, '#952D00'),
    (43, '#8E2900'),
    (45, '#882300'),
    (47, '#821E00'),
    (49, '#7B1A00'),
    (51, '#771900'),
    (53, '#701400'),
    (55, '#6A0E00'),
    (57, '#660D00'),
    (59, '#5E0B00'),
    (61, '#5A0A02'),
    (63, '#560A05'),
    (65, '#520907'),
    (67, '#4C0505'),
    (69, '#470606'),
    (71, '#440607'),
    (73, '#3F0708'),
    (75, '#3B0607'),
    (77, '#3A070B'),
    (79, '#36080A')
]


def load_beers(filename):
    catalog_df = pd.read_csv(filename, sep='\t', error_bad_lines=False)
    beers_df = catalog_df[catalog_df[COL_TYPE] == BEER_TYPE_VALUE]
    return {
        'alcohol': [convert_str_to_float(val_str) for val_str in beers_df[COL_ALCOHOL].values],
        'ebc': [convert_str_to_float(val_str) for val_str in beers_df[COL_EBC_COLOR].values],
        'ebc_color': [convert_ebc_to_color(val_str) for val_str in beers_df[COL_EBC_COLOR].values],
        'ebu': [convert_str_to_float(val_str) for val_str in beers_df[COL_EBU].values],
        'wort_strength': [convert_str_to_float(val_str) for val_str in beers_df[COL_WORT_STRENGTH].values],
        'country': beers_df[COL_COUNTRY].values,
        'type': beers_df[COL_BEER_TYPE].values,
        'name': beers_df[COL_NAME].values,
        'producer': beers_df[COL_PRODUCER].values
    }


def convert_ebc_to_color(ebc_str):
    ebc_val = convert_str_to_float(ebc_str)
    for ebc, color in EBC_COLOR_VALUES:
        if ebc_val < ebc:
            return color
    return '#000000'


def convert_str_to_float(val_str):
    val_str = str(val_str)
    converted_str = val_str.replace(',', '.')
    return float(converted_str)

