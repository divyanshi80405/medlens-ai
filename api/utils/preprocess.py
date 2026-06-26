from PIL import Image
import numpy as np
import torch
import torchxrayvision as xrv


def preprocess_image(image_path):
    # Open image in grayscale
    img = Image.open(image_path).convert("L")

    # Convert to numpy float32
    img = np.array(img).astype(np.float32)

    # Normalize
    img = xrv.datasets.normalize(img, 255)

    # Add channel dimension (1, H, W)
    img = img[None, :, :]

    # Resize to 224
    transform = xrv.datasets.XRayResizer(224)
    img = transform(img)

    # Convert to tensor
    img = torch.from_numpy(img)

    # Add batch dimension (1,1,224,224)
    img = img.unsqueeze(0)

    return img