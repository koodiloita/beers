# -*- coding: utf-8 -*-

from bokeh.plotting import figure, output_file, show
import pandas as pd


def main():
    ebu_list, alcohol_list, ebc_color_list = load_beers()
    create_figure(ebu_list, alcohol_list, ebc_color_list)


def create_figure(ebu_list, alcohol_list, ebc_color_list):
    output_file("beers.html")
    p = figure(title="Beers", x_axis_label='EBU', y_axis_label='%')
    p.circle(ebu_list, alcohol_list, size=8, color=ebc_color_list)
    show(p)


def load_beers():
    catalog_df = pd.read_csv('hinnasto.txt', sep='\t', error_bad_lines=False)
    beers_df = catalog_df[catalog_df['Tyyppi'] == 'oluet']
    # print(catalog_df.dtypes.index)
    ebu_list = [convert_str_to_float(val_str) for val_str in beers_df['Katkerot EBU'].values]
    alcohol_list = [convert_str_to_float(val_str) for val_str in beers_df['Alkoholi-%'].values]
    ebc_color_list = [convert_ebc_to_color(val_str) for val_str in beers_df['Väri EBC'].values]
    return ebu_list, alcohol_list, ebc_color_list


def convert_ebc_to_color(ebc_str):
    ebc_val = convert_str_to_float(ebc_str)
    for ebc, color in ebc_color_values:
        if ebc_val < ebc:
            return color
    return '#000000'


def convert_str_to_float(val_str):
    val_str = str(val_str)
    converted_str = val_str.replace(',', '.')
    return float(converted_str)


ebc_color_values = [
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


if __name__ == '__main__':
    main()
