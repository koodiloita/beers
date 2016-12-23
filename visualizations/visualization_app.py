from bokeh.io import curdoc
from bokeh.models import ColumnDataSource, HoverTool, Select
from bokeh.layouts import widgetbox, column
from bokeh.plotting import figure
import beer_data


beers = beer_data.load_beers('hinnasto.txt')
source = ColumnDataSource()
source.data = {
    'x': beers['ebu'],
    'y': beers['alcohol'],
    'color': beers['ebc_color'],
    'name': beers['name']
}


def update_x(attr, old, new):
    source.data['x'] = beers[new]


def update_y(attr, old, new):
    source.data['y'] = beers[new]

select_options = ['alcohol', 'ebc', 'ebu', 'wort_strength']
select_x = Select(title="x-axis", options=select_options, value='ebu')
select_y = Select(title="y-axis", options=select_options, value='alcohol')
select_x.on_change('value', update_x)
select_y.on_change('value', update_y)

hover = HoverTool(tooltips=[('Name', '@name')])
plot = figure(title='Beers visualization', plot_height=700, plot_width=1000)
plot.circle(x='x', y='y', fill_alpha=0.8, source=source, color='color', size=10, alpha=0.5)
plot.add_tools(hover)
layout = column(widgetbox(select_x), widgetbox(select_y), plot)
curdoc().add_root(layout)
curdoc().title = 'Beer visualization'
