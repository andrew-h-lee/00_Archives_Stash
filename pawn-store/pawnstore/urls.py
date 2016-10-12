from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pawnstore.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^inventory/$', 'inventory.views.index'),
    url(r'^inventory/(?P<item_id>\d+)/$','inventory.views.detail'),
    url(r'^newitem/$','inventory.views.newitem', name="newitem"),
    
)
