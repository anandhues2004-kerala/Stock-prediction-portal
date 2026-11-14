import os
from django.conf import settings
import matplotlib.pyplot as plt

def save_plot(img_plot_path):
    image_path=os.path.join(settings.MEDIA_ROOT,img_plot_path)
    plt.savefig(image_path)
    plt.close()
    img_url=settings.MEDIA_URL+img_plot_path
    return img_url


